import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jestFetchMock from 'jest-fetch-mock';

Enzyme.configure({ adapter: new Adapter() });
global.fetch = jestFetchMock;
