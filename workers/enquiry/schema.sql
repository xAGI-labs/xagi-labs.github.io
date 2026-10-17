CREATE TABLE IF NOT EXISTS enquiries (
  receipt TEXT PRIMARY KEY,
  fingerprint TEXT NOT NULL,
  intent TEXT NOT NULL,
  placement TEXT NOT NULL,
  modality TEXT NOT NULL,
  source TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('pending','accepted','review')),
  provider_id TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  accepted_at TEXT,
  is_test INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS enquiries_status_date ON enquiries(status, created_at);
CREATE TABLE IF NOT EXISTS rate_limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, expires INTEGER NOT NULL);
