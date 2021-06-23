import Noty from 'noty';
import '../styles/components/Main.scss'
import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/mint.css";

const showNotification = (text) => {

    new Noty({

        text,
        timeout: 5000,
        type: 'sports-icon',
        progressBar: true,
        layout: 'top',

    }).show();

}


export { showNotification }