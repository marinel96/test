interface SingleItem {
    type: string;
    toFrom: string;
    details: string;
    amount: number;
}

type FormDatasInList = {
    [K in keyof SingleItem]: string;
}

// Define a class to handle the form and item lists

class FormHandler {

    private itemList: SingleItem[] = [];
    // This line declares a private property form of type HTMLFormElement,
    // This property will hold a reference to the HTML form element
    private form : HTMLFormElement;

    constructor(form: HTMLFormElement){
        this.form = form;
        this.initialize();
    }

    private initialize(){
        // This line adds an event listener to the submit event of the form element (this.form).
        // When the form is submitted, it calls the handleSubmit method of the FormHandler instance
        // The bind(this) ensures that (this) inside handleSubmit refers to the FormHandler instance

        this.form.addEventListener("submit", this.handleSubmit.bind(this))
    }

    private handleSubmit(event: Event){
        event.preventDefault();

        // 4 hapa qe do ndjekim
        // Get data from form -- Done
        // Create a new item with these data --done
        // Add the created items into the list 
        // clear the form


        const formData = this.getFormData()
        const item = this.createItem(formData)
        console.log(formData.type)
    }

    private getFormData(): FormDatasInList {
        const type = (document.getElementById("type") as HTMLSelectElement).value
        const toFrom = (document.getElementById("toFrom") as HTMLInputElement).value
        const details = (document.getElementById("details") as HTMLInputElement).value
        const amount = (document.getElementById("amount") as HTMLInputElement).value
        //  return "hahahahhaa un bej return cfrae te duaaaaaaaaaaaaaaaaa"
        return {type, toFrom, details, amount}
    }

    // Detyre vazhdoni logjiken e formes

    private createItem(formData: FormDatasInList): SingleItem {
        const amount: number = parseFloat(formData.amount);
    

        const newItem: SingleItem = {
            type: formData.type,
            toFrom: formData.toFrom,
            details: formData.details,
            amount: amount
        };
    
        return newItem;
    }
}