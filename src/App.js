import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//03232019
//import Greet from './components/03232019components_different_format/Greet';
//03272019
//import Welcome from './components/03272019class_components/Welcome';
//03302019
//import Jsx from './components/03302019jsx/Jsx';
//04022019
//import Greet from './components/04022019props/Greet';
//import Welcome from './components/04022019props/Welcome';
//04062019
//import Counter from './components/04062019setState/Counter';
//04092019
//import FunctionClick from './components/04092019event_handling/FunctionClick';
//import ClassClick from './components/04092019event_handling/ClassClick';
//04142019
//import EventBind from './components/04112019binding_event_handlers/EventBind';
//04142019
//import ParentComponent from './components/04142019child_call_parents_function/ParentComponent'
//04282019
//import PersonList from './components/04282019list_rendering/PersonList';
//04292019
//import PersonList from './components/04292019lists_and_keys/PersonList';
//04302019
//import PersonList from './components/04302019index_as_key_anti_pattern/PersonList'
//05022019
//import './components/05022019styling_css_moduleCSS/appStyles.css';
//import styles from './components/05022019styling_css_moduleCSS/appStyles.module.css';
//import Stylesheet from './components/05022019styling_css_moduleCSS/Stylesheet';
//import Inline from './components/05022019styling_css_moduleCSS/Inline';
//05042019
//import Form from './components/05042019basices_of_from_handing/Form';
//05042019
//import * as libA  from './modules/libA';
//import { add, substract, incrementNum, num } from './components/05042019import_modules_ES6/modules/libA'
//import mult, { x } from './components/05042019import_modules_ES6/modules/libB'
//import Car from './components/05042019import_modules_ES6/modules/libC'
//05242019
//import LifecycleA from './components/05242019component_mounting_lifecycle_methods/LifecycleA'
//05282019
//import LifecycleA from './components/05282019component_updating_lifecycle_methods/LifecycleA'
//05292019
//import FragmentDemo from './components/05292019fragments/FragmentDemo'
//import Table from './components/05292019fragments/Table'
//06022019
import RefsDemo from './components/06022019element_reference(Refs)/RefsDemo'


class App extends Component {
  constructor() {
		super();
    //05042019
		//this.newCar = new Car('speedy');


	}
  render() {
    return (
      <div className="App">
        {/*03232019------------------*/}
        {/*components/03232019components_different_format/Greet*/}
        {/*<Greet />*/}

        {/*03272019------------------*/}
        {/*components/03272019class_components/Welcome*/}
        {/*<Welcome />*/}

        {/*03302019------------------*/}
        {/*omponents/03302019jsx/Jsx*/}
        {/*<Jsx />*/}

        {/*04022019------------------*/}
        {/*
        <Greet name="Vishwas">
          <p>This is the child</p>
        </Greet>
        <Welcome name="Vishwas">
          <p>This is the Welcome child</p>
        </Welcome>
        */}

        {/*04062019------------------*/}
        {/*<Counter />*/}

        {/*04092019------------------*/}
        {/*
        <ClassClick />
        <FunctionClick />
        */}

        {/*04092019------------------*/}
        {/*<EventBind />*/}

        {/*04092019------------------*/}
        {/*<ParentComponent />*/}

        {/*04282019------------------*/}
        {/*<PersonList />*/}

        {/*04292019------------------*/}
        {/*<PersonList />*/}

        {/*04302019------------------*/}
        {/*<PersonList />*/}

        {/*05022019------------------*/}
        {/*
        <h1 className='error'>Error</h1>     the style error is still work in all the children component
        <h1 className={styles.success}>Success</h1>     the module style styles.success is not work in all the children component
        <Stylesheet />
        <Inline />
        */}

        {/*05042019------------------*/}
        {/*<Form />*/}

        {/*05042019------------------*/}
        {/*<div>{libA.add(1, 3)}</div>*/}
        {/*<div>{libA.substract(1, 3)}</div>*/}
        {/*<div>{libA.incrementNum(1, 3)}</div>*/}
        {/*<div>{libA.num}</div>*/}
        {/*
        <div>{add(1, 3)}</div>
        <div>{substract(1, 3)}</div>
        <div>{incrementNum()}</div>
        <div>{num}</div>

        <div>-----------------------</div>
        <div>{mult(2, 3)}</div>
        <div>{ x }</div>

        <div>-----------------------</div>
        <div>{ this.newCar.name }</div>
        */}

        {/*05242019------------------*/}
        {/*<LifecycleA />*/}

        {/*05282019------------------*/}
        {/*<LifecycleA />*/}

        {/*05292019------------------*/}
        {/*<FragmentDemo />*/}
        {/*<Table />*/}

        {/*06022019------------------*/}
        <RefsDemo />
      </div>
    );
  }
}

export default App;
