import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import component from './component';
import { setRawSource } from '../../init/dux';

const mapDispatchToProps = dispatch => ({
    submitURL: (event) => {
        event.preventDefault();
        const textInput = event.target[0];
        const url = textInput.value.trim();
        textInput.value = '';
        dispatch(setRawSource({
            from: 'remote',
            data: url
        }));
        const encodedURL = encodeURIComponent(url);
        const newRoute = `/?src=${encodedURL}`;
        dispatch(push(newRoute));
    },
    submitFile: (files) => {
        const file = files[0];
        if (file) {
            dispatch(setRawSource({
                from: 'local',
                data: file
            }));
            dispatch(push('/?src=local'));
        } else {
            alert('Not a .qza/.qzv file.');
        }
    }
});

export default connect(null, mapDispatchToProps)(component);
