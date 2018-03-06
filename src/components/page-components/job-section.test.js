import React from 'react';
import {shallow} from 'enzyme';

import JobSection from './job-section';

let job = {
	title: "Web Developer",
	company: "Google"
};

describe('<JobSection />', () => {
    it('Renders without crashing', () => {
        shallow(<JobSection job={job} />);
    });
});