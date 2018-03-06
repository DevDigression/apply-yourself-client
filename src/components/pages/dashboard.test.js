import React from 'react';
import {shallow} from 'enzyme';

import {Dashboard} from './dashboard';
import { connect } from "react-redux";
import requiresLogin from "../requires-login";
import { Link } from "react-router-dom";
import {
  fetchJobs,
  sortByPriority,
  sortByStatus
} from "../../actions/protected-data";
import NavBar from "../navbar";
import Welcome from "../page-components/welcome";
import JobSection from "../page-components/job-section";
import "./dashboard.css";

const mockFetchJobsAction = () => (dispatch, getState) => {};

jest.mock('../../actions/protected-data', () => Object.assign({},
    require.requireActual('../../actions/protected-data'),
    {
        fetchJobs: jest.fn().mockImplementation(() => {
            return mockFetchJobsAction;
        })
    }
));

describe('<Dashboard/>', () => {
    let seedJobs = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedJobs.push({
                title: "Job Title"
            })
        }
    });

    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Dashboard jobs={seedJobs} dispatch={dispatch} />);
    });

    it('Dispatches fetchJobs on mount', () => {
        const dispatch = jest.fn();
        shallow(<Dashboard jobs={seedJobs} dispatch={dispatch} />);
        expect(dispatch).toHaveBeenCalledWith(mockFetchJobsAction);
    });

    it('Renders the jobs', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<Dashboard jobs={seedJobs} dispatch={dispatch} />);
        const jobs = wrapper.find(JobSection);
        expect(jobs.length).toEqual(seedJobs.length);
        // const firstJob = jobs.first();
        // expect(firstJob.prop('job.title')).toEqual(seedJobs[0].title);
    });
});