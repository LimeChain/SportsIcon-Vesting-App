import Noty from 'noty';
import '../styles/components/Main.scss';
import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/mint.css";
import { Error } from "../components/Vectors/Error";
const showNotification = (text, alert) => {
    Noty.overrideDefaults({
        callbacks: {
            onTemplate: function () {
                if (this.options.type === 'sports-icon-alert') {
                    this.barDom.innerHTML = '<div class="my-custom-template noty_body">';
                    this.barDom.innerHTML += this.options.alert + '<p class="noty-reply">Error</p>';
                    this.barDom.innerHTML += '<p>' + this.options.text + '</p>';
                    this.barDom.innerHTML += '</ div>';
                }
            }
        }
    })
    new Noty({
        alert: alert ? alert : Error,
        text: text,
        type: 'sports-icon-alert',
        progressBar: true,
        timeout: 5000,
        layout: 'topCenter',
    }).show();
}
export { showNotification }