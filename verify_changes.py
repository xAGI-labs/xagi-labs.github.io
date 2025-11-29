from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to homepage
        page.goto("http://localhost:3000")

        # Verify Header
        # Check that "Research" link is NOT present
        try:
            page.get_by_role("link", name="Research").wait_for(state="visible", timeout=2000)
            print("FAILED: Research link found in header/page")
        except:
            print("PASSED: Research link not found in header")

        # Verify Footer "xAGI Voice"
        # Scroll to footer
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")

        try:
            # Look for xAGI Voice link
            voice_link = page.get_by_role("link", name="xAGI Voice")
            if voice_link.is_visible():
                print("PASSED: xAGI Voice link found in footer")
            else:
                print("FAILED: xAGI Voice link not visible")
        except Exception as e:
            print(f"FAILED: xAGI Voice link check failed: {e}")

        # Navigate to new research papers page
        response = page.goto("http://localhost:3000/research-papers")
        if response.ok:
             print("PASSED: /research-papers page loaded successfully")
        else:
             print(f"FAILED: /research-papers page failed to load with status {response.status}")

        # Take screenshots
        page.goto("http://localhost:3000")
        page.screenshot(path="verification_home.png")

        page.goto("http://localhost:3000/research-papers")
        page.screenshot(path="verification_research_papers.png")

        browser.close()

if __name__ == "__main__":
    verify_changes()
