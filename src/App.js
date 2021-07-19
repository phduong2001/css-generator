import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import BoxShadow from './components/BoxShadow';
import TextShadow from './components/TextShadow';
import Cursor from './components/Cursor';
import BorderRadius from './components/BorderRadius';
import Transform from './components/Transform';
import Filter from './components/Filter';
import MultipleColumns from './components/MultipleColumns';

const App = () => {
  return (
    <>
      <h1>CSs Generator Tool</h1>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/box-shadow' component={BoxShadow} />
        <Route path='/text-shadow' component={TextShadow} />
        <Route path='/cursor' component={Cursor} />
        <Route path='/border-radius' component={BorderRadius} />
        <Route path='/transform' component={Transform} />
        <Route path='/filter' component={Filter} />
        <Route path='/multiple-columns' component={MultipleColumns} />
      </Switch>
    </>
  );
};

export default App;
