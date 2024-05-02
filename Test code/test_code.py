from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def test_wkgout_flow():
    # Initialize the web driver
    driver = webdriver.Chrome()

    try:
        # Navigate to the website
        driver.get("https://main.d3sgq1csnkubqp.amplifyapp.com/")

        # Wait until the "LOGIN" link appears
        login_link = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.LINK_TEXT, "LOGIN"))
        )

        login_link.click()

        # Wait for the login form to appear
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.NAME, "username"))
        )

        # Log in
        username = driver.find_element(By.NAME, "username")
        password = driver.find_element(By.NAME, "password")
        username.send_keys("minukatrik")
        password.send_keys("password")

        # Locate and click the login button
        submit_button = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "input.primary[type='submit']"))
        )

        submit_button.click()


        print("Test passed: User flow executed successfully")

    finally:
        driver.quit()

# Run the test
if __name__ == "__main__":
    test_wkgout_flow()
