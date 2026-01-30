import fs from 'fs';
import path from 'path';
import Parser from 'rss-parser';
import TurndownService from 'turndown';
import slugify from 'slugify';

const parser = new Parser();
const turndownService = new TurndownService();
const BLOG_DIR = path.join(process.cwd(), 'content/blog');

async function main() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }

  try {
    const feed = await parser.parseURL('https://news.smol.ai/rss.xml');
    console.log(`Fetched ${feed.items.length} items from RSS.`);

    for (const item of feed.items) {
      if (!item.title) continue;

      // Filter out "not much happened today"
      if (item.title.toLowerCase().includes("not much happened today")) {
        console.log(`Skipping: ${item.title}`);
        continue;
      }

      const slug = slugify(item.title, { lower: true, strict: true });
      const filename = `${slug}.md`;
      const filepath = path.join(BLOG_DIR, filename);

      if (fs.existsSync(filepath)) {
        console.log(`Skipping existing post: ${item.title}`);
        continue;
      }

      const date = item.pubDate ? new Date(item.pubDate).toISOString() : new Date().toISOString();
      // content:encoded is often where the full content lives in RSS
      const content = item['content:encoded'] || item.content || item.description || '';
      let markdown = turndownService.turndown(content);

      // Fix commonly escaped markdown characters that Turndown might have escaped if the input was already text-like
      markdown = markdown
        .replace(/\\\*\\\*/g, '**')
        .replace(/\\\[/g, '[')
        .replace(/\\\]/g, ']');

      // Clean up description for frontmatter
      const cleanDescription = (item.contentSnippet || item.description || '')
        .replace(/"/g, '\\"')
        .replace(/\n/g, ' ')
        .substring(0, 160);

      const frontmatter = `---
title: "${item.title.replace(/"/g, '\\"')}"
date: "${date}"
description: "${cleanDescription}..."
original_link: "${item.link}"
---

${markdown}

[Read original post](${item.link})
`;

      fs.writeFileSync(filepath, frontmatter);
      console.log(`Created post: ${filename}`);
    }
  } catch (error) {
    console.error('Error fetching/parsing RSS:', error);
    process.exit(1);
  }
}

main();
