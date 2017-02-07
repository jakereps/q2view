import React from 'react';
import JSONTree from 'react-json-tree';
import { Grid, Panel } from 'react-bootstrap';

import theme from '../../lib/theme';

export default ({ metadata }) => (
    <Grid>
        <Panel header={`Peek of ${metadata.uuid}`} style={{ marginTop: '30px' }}>
            <JSONTree theme={theme} getItemString={() => null} hideRoot data={metadata} />
        </Panel>
    </Grid>
);
