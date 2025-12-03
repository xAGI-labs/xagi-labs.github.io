from playwright.sync_api import sync_playwright

def verify_game():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # The game is at /siliconhalli
            # Since I built it statically, I can try to access the build output directly or start the server.
            # I'll try to start the server in a separate process first.
            page.goto("http://localhost:3000/siliconhalli")

            # Wait for the game to load
            page.wait_for_selector("text=SiliconHalli")

            # Take a screenshot
            page.screenshot(path="verification/game.png")
            print("Screenshot taken")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_game()
