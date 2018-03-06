import React from 'react';
import {shallow} from 'enzyme';

import SingleJob from './single-job';

let job = {
	title: "Web Developer",
	company: "Google"
};

describe('<SingleJob />', () => {
    it('Renders without crashing', () => {
        shallow(<SingleJob job={job} />);
    });
});