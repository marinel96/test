// Define a class to handle the form and item lists
class FormHandler {
    constructor(form) {
        this.itemList = [];
        this.form = form;
        this.initialize();
    }
    initialize() {
        // This line adds an event listener to the submit event of the form element (this.form).
        // When the form is submitted, it calls the handleSubmit method of the FormHandler instance
        // The bind(this) ensures that (this) inside handleSubmit refers to the FormHandler instance
        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }
    handleSubmit(event) {
        event.preventDefault();
        // 4 hapa qe do ndjekim
        // Get data from form -- Done
        // Create a new item with these data --done
        // Add the created items into the list 
        // clear the form
        const formData = this.getFormData();
        const item = this.createItem(formData);
        console.log(formData.type);
    }
    getFormData() {
        const type = document.getElementById("type").value;
        const toFrom = document.getElementById("toFrom").value;
        const details = document.getElementById("details").value;
        const amount = document.getElementById("amount").value;
        //  return "hahahahhaa un bej return cfrae te duaaaaaaaaaaaaaaaaa"
        return { type, toFrom, details, amount };
    }
    // Detyre vazhdoni logjiken e formes
    createItem(formData) {
        const amount = parseFloat(formData.amount);
        const newItem = {
            type: formData.type,
            toFrom: formData.toFrom,
            details: formData.details,
            amount: amount
        };
        return newItem;
    }
}
