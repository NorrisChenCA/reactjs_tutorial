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
//import RefsDemo from './components/06022019element_reference(Refs)/RefsDemo'
//06032019
//import FocusInput from './components/06032019Ref_with_class_component/FocusInput'
//06062019
//import FRParentInput from './components/06062019forwarding_refs/FRParentInput'
//06092019
//import PortalDemo from './components/06092019portals/PortalDemo'
//06112019
//import Hero from './components/06112019getDerivedStateFromError_componentDidCatch/Hero'
//import ErrorBoundary from './components/06112019getDerivedStateFromError_componentDidCatch/ErrorBoundary'
//06152019
//import ClickCounter from './components/06152019higher_order_component/ClickCounter'
//import HoverCounter from './components/06152019higher_order_component/HoverCounter'
//07012019
//import User from './components/07012019render_props/User'
//import ClickCounter from './components/07012019render_props/ClickCounter'
//import HoverCounter from './components/07012019render_props/HoverCounter'
//import Counter from './components/07012019render_props/Counter'
//07022019
//import ComponentC from './components/07022019context/ComponentC'
//import {UserProvider} from './components/07022019context/userContext'
//07042019
//import PostList from './components/07042019http_get_request_by_axios/PostList'
//07062019
//import PostForm from './components/07062019http_post_request_axios/PostForm'
//07092019
//import ClassCounter from './components/07092019useState_Hook/ClassCounter'
//import HookCounter from './components/07092019useState_Hook/HookCounter'
//07112019
//import HookCounterTwo from './components/07112019userState_with_previous_state/HookCounterTwo'
//07122019
//import HookCounterThree from './components/07122019useState_with_object/HookCounterThree'
//07132019
//import HookCounterFour from './components/07132019useState_with_array/HookCounterFour'
//07152019
//import ClassCounterOne from './components/07152019useEffect_after_render/ClassCounterOne'
//import HookCounterOne from './components/07152019useEffect_after_render/HookCounterOne'
//07162019
//import ClassCounterOne from './components/07162019conditionally_run_effects/ClassCounterOne'
//import HookCounterOne from './components/07162019conditionally_run_effects/HookCounterOne'
//07172019
//import ClassMouse from './components/07172019run_effects_only_once/ClassMouse'
//import HookMouse from './components/07172019run_effects_only_once/HookMouse'
//07172019
//import MouseContainer from './components/07172019useEffect_with_cleanup/MouseContainer'
//07182019
//import IntervalClassCounter from './components/07182019useEffect_with_incorrect_dependency/IntervalClassCounter'
//import IntervalHookCounter from './components/07182019useEffect_with_incorrect_dependency/IntervalHookCounter'
//07192019
//import DataFetching from './components/07192019fetching_data_with_useEffect_part1/DataFetching'
//07202019
//import DataFetching from './components/07202019fetching_data_with_useEffect_part_2/DataFetching'
//07202019
//import DataFetching from './components/07202019fetching_data_with_useEffect_part_3/DataFetching'
//07212019
//import ComponentC from './components/07212019useContext_hook_part_2/ComponentC'
//export const UserContext = React.createContext()
//export const ChannelContext = React.createContext()
//07212019
//import CounterOne from './components/07212019useReducer_simple_state_and_action/CounterOne'
//07232019
import CounterTwo from './components/07232019useReducer_complex_state_and_action/CounterTwo'

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
        {/*<RefsDemo />*/}

        {/*06032019------------------*/}
        {/*<FocusInput />*/}

        {/*06062019------------------*/}
        {/*<FRParentInput />*/}

        {/*06092019------------------*/}
        {/*component PortalDemo is mounted in the index.html element 'portal-root', not the 'root' element, one of the usecase for portal is modal popup*/}
        {/*<PortalDemo />*/}

        {/*06112019------------------*/}
        {/*
        <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman"></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary>
        */}

        {/*06152019------------------*/}
        {/*<HoverCounter />*/}
        {/*the name props not go to ClickCount component, the props goes to withCounter component*/}
        {/*<ClickCounter name='Wishvar'/>*/}

        {/*07012019------------------*/}
        {/*User props is varant*/}
        {/*<User name="Vishwas"/>*/}
        {/*User props is function*/}
        {/*<User name={(isLoggedIn) => isLoggedIn ? 'Vishwas' : 'Guest'}/>*/}
        {/*<Counter render={(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount} />} />*/}
        {/*<Counter render={(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />} />*/}

        {/*07022019------------------*/}
        {/*
        <UserProvider value='Vishwas'>
          <ComponentC />
        </UserProvider>
        */}

        {/*07042019------------------*/}
        {/*<PostList />*/}

        {/*07062019------------------*/}
        {/*<PostForm />*/}

        {/*07092019------------------*/}
        {/*
        <ClassCounter />
        <HookCounter />
        */}

        {/*07112019------------------*/}
        {/*<HookCounterTwo />*/}

        {/*07122019------------------*/}
        {/*<HookCounterThree />*/}

        {/*07132019------------------*/}
        {/*<HookCounterFour />*/}

        {/*07152019------------------*/}
        {/*<ClassCounterOne />*/}
        {/*<HookCounterOne />*/}

        {/*07162019------------------*/}
        {/*<ClassCounterOne />*/}
        {/*<HookCounterOne />*/}

        {/*07172019------------------*/}
        {/*<ClassMouse />*/}
        {/*<HookMouse />*/}

        {/*07172019------------------*/}
        {/*<MouseContainer />*/}

        {/*07182019------------------*/}
        {/*<IntervalClassCounter />*/}
        {/*<IntervalHookCounter />*/}

        {/*07192019------------------*/}
        {/*<DataFetching />s*/}

        {/*07202019------------------*/}
        {/*<DataFetching />*}

        {/*07202019 part 3------------*/}
        {/*<DataFetching />*/}

        {/*07212019 part 3------------*/}
        {/*
        <UserContext.Provider value={'Vishwas'}>
          <ChannelContext.Provider value={'Code volution'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>
        */}

        {/*07212019 -----------------*/}
        {/*<CounterOne />*/}

        {/*07232019 -----------------*/}
        <CounterTwo />
      </div>
    )
  }
}

export default App;
