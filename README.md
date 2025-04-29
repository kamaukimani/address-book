
---

# **Address Book and To-Do List**  
#### A web app for managing contacts and tasks, 27/04/2025  
#### By **Paul**

## **Description**  
This is a web application that allows users to add contacts with their first name, last name, contact, and email. Users can also create a to-do list, mark tasks as done, and delete them. It’s a simple way to manage personal information and tasks.

## **Setup/Installation Requirements**  
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/address-book-to-do-list.git
   ```

2. **Navigate into the project folder:**
   ```bash
   cd address-book-to-do-list
   ```

3. **Open `index.html` in a browser:**
   - The application does not require any server-side setup. Simply open `index.html` in a browser of your choice (e.g., Chrome, Firefox).

4. **Dependencies (if applicable):**
   - If you have any external libraries or dependencies (e.g., jQuery, Bootstrap), list them here.  
   Example: 
   ```bash
   npm install [package-name]
   ```

5. **Run the application:**
   - No server is needed. Just open the `index.html` file in your browser to start using the Address Book and To-Do List application.

## **Known Bugs**  
- **Form input validation:** Sometimes, if the form is submitted too quickly after entering data, the input might not be processed correctly.  
  - **Workaround:** Ensure all fields are filled out completely before submitting.

- **To-Do List state reset:** Occasionally, the "Done" state of tasks may not persist after the page is reloaded.  
  - **Workaround:** The application does not currently save data to a database or local storage. This issue will be fixed in a future release.

## **Technologies Used**  
- **HTML5** – Used for structuring the content of the application.
- **CSS3** – Applied for styling and layout of the page.
- **JavaScript** – Used for interactivity, such as adding contacts, marking tasks as done, and deleting tasks.
- **LocalStorage (optional)** – If you implement local storage for saving tasks or contacts.

## **Support and Contact Details**  
If you encounter any issues or have any questions, please feel free to reach out via the following contact information:  
- **Phone:** 0787654321

### **License**  
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  
Copyright (c) 2025 **Paul**

---