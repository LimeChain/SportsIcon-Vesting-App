import Noty from 'noty';
import '../styles/components/Main.scss';
import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/mint.css";
import { Error } from "../components/Vectors/Error";
import { Success } from '../components/Vectors/Success';

const showNotification = (text, type, linkToExplorer) => {
    Noty.overrideDefaults({
        callbacks: {
            onTemplate: function () {
                if (this.options.type === 'sports-icon-alert') {
                    this.barDom.innerHTML = '<div class="noty-error">';
                    this.barDom.innerHTML += this.options.alert + '<p class="noty-reply">Error</p>';
                    this.barDom.innerHTML += '<p>' + text + '</p>';
                    this.barDom.innerHTML += '</ div>';
                } else if (this.options.type  === 'sports-icon-success'){
                    this.barDom.innerHTML = '<div class="my-custom-template noty_body">';
                    this.barDom.innerHTML += this.options.alert + '<p class="noty-reply">Success</p>';
                    this.barDom.innerHTML += '<p>' + this.options.text + `<a href=${linkToExplorer} target="_blank"> Explore transaction here. </a>` + '</p>';
                    this.barDom.innerHTML += '</div>';
                }
            }
        }
    })
    new Noty({
        alert: type === 'sports-icon-success' ? Success : Error,
        text: text,
        type: type === 'sports-icon-success' ? 'sports-icon-success' : 'sports-icon-alert',
        linkToExplorer,
        progressBar: true,
       // timeout: 5000,
        maxVisible: 1,
        layout: 'bottom',
    }).show();
}
export { showNotification }