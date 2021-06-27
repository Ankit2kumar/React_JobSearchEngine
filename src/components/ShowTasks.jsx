import React from 'react';
import { Row, Alert } from 'react-bootstrap';
import uniqid from 'uniqid';
class ShowTasks extends React.Component {
	state = {};
	render() {
		return (
			<>
				<Row className="mt-5">
					{this.props.tasksList.map((task) => (
						<Alert key={uniqid()} variant="warning">
							{task}
						</Alert>
					))}
				</Row>
			</>
		);
	}
}

export default ShowTasks;
