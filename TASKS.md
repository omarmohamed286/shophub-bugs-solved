# 📝 ShopHub Training Project

Welcome to the ShopHub training project! Your goal is to identify and fix bugs, improve functionality, and learn React best practices.

---

## Test Cases to Verify

### Task 1: Product Details Page Not Loading

**Problem:**  
Navigate to the home page and click on any product card. The product details page fails to load and displays an error message.

**Expected Behavior:**  
Clicking on a product should navigate to a details page showing the product's full information, images, description, and price.

**Steps to Reproduce:**

1. Open the application
2. Click on any product card from the main page
3. Observe the error

---

### Task 2: Add to Cart Button Navigates Instead of Adding Product

**Problem:**  
On the main products page, clicking the "Add to Cart" button on a product card navigates to the product details page instead of adding the item to the cart.

**Expected Behavior:**  
Clicking "Add to Cart" should add the product to the shopping cart and update the cart count in the navigation bar, without navigating away from the products listing page.

**Steps to Reproduce:**

1. Navigate to the products listing page
2. Click the "Add to Cart" button on any product card
3. Observe that you are redirected to the product details page instead of the item being added to cart

---

### Task 3: Console Warnings Present

**Problem:**  
Open the browser developer console and observe React warnings appearing in the console output.

**Expected Behavior:**  
The application should run without any warnings in the console.

**Steps to Reproduce:**

1. Open the application
2. Open browser developer tools (F12)
3. Check the Console tab for warnings

---

### Task 4: Cannot Remove Items from Shopping Cart

**Problem:**  
Add products to the cart and navigate to the cart page. Clicking the "Remove" button next to any item does not remove it from the cart.

**Expected Behavior:**  
Clicking "Remove" should immediately remove the item from the cart and update the total price.

**Steps to Reproduce:**

1. Add several products to the cart
2. Navigate to the cart page
3. Click the "Remove" button on any item
4. Observe that the item remains in the cart

---

### Task 5: Application Crashes When API Fails

**Problem:**  
The category filter section may cause the application to crash if there are network issues or API errors.

**Expected Behavior:**  
The application should handle API errors gracefully and display an appropriate error message without crashing.

**Steps to Reproduce:**

1. Simulate a network failure (disconnect internet or use browser DevTools to block requests)
2. Refresh the page
3. Observe application behavior

---

### Task 6: Cart Badge Shows Incorrect Count

**Problem:**  
Add a product to the cart, then go to the cart page and increase its quantity using the + button. Return to the products page and check the cart badge in the navigation bar. The badge number does not reflect the total quantity of items.

**Expected Behavior:**  
The cart badge should display the total quantity of all items in the cart (e.g., if you have 1 product with quantity 5, the badge should show "5").

**Steps to Reproduce:**

1. Add a product to cart from the products page
2. Navigate to the cart page
3. Use the + button to increase the product quantity to 3 or more
4. Navigate back to the products page
5. Check the cart badge number in the navbar - it shows "1" instead of the actual total quantity

---

### Task 7: Category Filter Shows Wrong Products

**Problem:**  
Use the category filter buttons on the main page. When selecting a specific category, the displayed products do not match the selected category.

**Expected Behavior:**  
Selecting a category should display only products belonging to that category.

**Steps to Reproduce:**

1. Navigate to the products page
2. Click on any category filter button (e.g., "Electronics", "Clothes")
3. Observe which products are displayed
4. Verify they match the selected category

---

### Task 8: Search Returns Unexpected Results

**Problem:**  
Type a product name in the search bar. The search results do not match what you searched for.

**Expected Behavior:**  
Searching for a product name should filter and display products whose names contain the search term.

**Steps to Reproduce:**

1. Type "classic" in the search bar
2. Observe the search results
3. Verify if the results match the search term

---

### Task 9: Duplicate Products Appear in Cart

**Problem:**  
Add the same product to the cart multiple times by clicking "Add to Cart" repeatedly. The cart shows the same product as multiple separate entries instead of increasing the quantity.

**Expected Behavior:**  
Adding the same product multiple times should increase its quantity counter, not create duplicate entries.

**Steps to Reproduce:**

1. Click "Add to Cart" on the same product 3 times
2. Navigate to the cart page
3. Observe how many times the product appears

---

### Task 10: Cart Total Price is Incorrect

**Problem:**  
Add a product to the cart and increase its quantity to 3 or more. The total price shown does not match the expected calculation.

**Expected Behavior:**  
Total price should equal the sum of (price × quantity) for each item in the cart.

**Steps to Reproduce:**

1. Add a product priced at $100 to cart
2. Increase quantity to 3
3. Check if total shows $300
4. Observe the actual total displayed

---

### Task 11: Layout Breaks on Tablet Devices

**Problem:**  
Resize the browser window to tablet width (approximately 800px). The product grid layout appears cramped and difficult to browse.

**Expected Behavior:**  
The layout should adapt appropriately for tablet screens, displaying products in a readable grid format.

**Steps to Reproduce:**

1. Open the products page
2. Resize browser window to ~800px width (or use DevTools device emulation)
3. Observe the product grid layout

---

### Task 12: Performance Issue with Error Component

**Problem:**  
The error message component re-renders more frequently than necessary, which can be observed in the console logs.

**Expected Behavior:**  
Components should only re-render when their props or state actually change.

**Steps to Reproduce:**

1. Trigger an error state (e.g., disconnect network and try to load products)
2. Observe console logs showing multiple "ErrorMessage rendered" messages
3. Interact with other parts of the page

---

### Task 13: Products Page Loading State

**Problem:**  
When the application first loads or when you refresh the products page, verify that a loading indicator appears while products are being fetched from the API.

**Expected Behavior:**  
Users should see a clear loading spinner or indicator on the products page while waiting for product data to load, providing visual feedback that the application is working.

**Steps to Reproduce:**

1. Open browser DevTools (F12)
2. Go to Network tab and throttle connection to "Slow 3G"
3. Navigate to the products page (or refresh if already there)
4. Observe whether a loading indicator appears while products are being fetched
5. Verify the loading indicator disappears once products are displayed

---

### Task 14: Search Input Performance Issue

**Problem:**  
Type quickly in the search bar. The application may perform unnecessary operations for each keystroke.

**Expected Behavior:**  
Search should wait for the user to finish typing before filtering results, rather than filtering on every single keystroke.

**Steps to Reproduce:**

1. Open the products page
2. Type quickly in the search bar
3. Observe application behavior and performance

---

### Task 15: Cart Data Persistence Test

**Problem:**  
Add items to the cart, then refresh the page. Verify whether cart data persists correctly.

**Expected Behavior:**  
Cart contents should persist across page refreshes so users don't lose their selections.

**Steps to Reproduce:**

1. Add multiple items to cart
2. Refresh the page (F5)
3. Check if cart contents are preserved

---

### Task 16: Broken Product Images

**Problem:**  
Some product images may fail to load. The application should handle this gracefully.

**Expected Behavior:**  
If a product image fails to load, a placeholder image should be displayed instead of a broken image icon.

**Steps to Reproduce:**

1. Browse products
2. Look for any broken image icons
3. Consider what happens if image URLs become invalid

---

### Task 17: Product List Performance Analysis

**Problem:**  
The product list may re-render more frequently than necessary when filters or search terms change.

**Expected Behavior:**  
The application should minimize unnecessary re-renders to maintain good performance.

**Steps to Reproduce:**

1. Open React DevTools Profiler
2. Interact with filters and search
3. Analyze render frequency and performance

---

### Task 18: Missing 404 Page for Invalid Routes

**Problem:**  
Navigate to a non-existent route in the application (e.g., `/invalid-page` or `/products/999999`). The application does not display a user-friendly error page.

**Expected Behavior:**  
When users navigate to an invalid route, they should see a custom 404 page with a clear message and a link to return to the home page.

**Steps to Reproduce:**

1. In the browser address bar, manually type an invalid URL (e.g., `http://localhost:5173/invalid-route`)
2. Press Enter
3. Observe what is displayed
4. Verify if there's a way to navigate back to the application

**Good luck! 🚀**
