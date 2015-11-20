import riot from 'riot';
import componentFactory from '../component-factory';

import mall from './mall';

componentFactory.createComponent('main', `

<mall if={stores.main.state=='mall'}></mall>


<style>
    main {
        display: block;
        background-color: pink;
    }
</style>
 
 `,
 function(opts) {
    this.on('mount', () => {
        console.log("Main mounted");
    });

    this.dispatcher.on('main_state_updated', () => {
        this.update();
    });
});
