import React from 'react';
import { Row, Alert, Button } from 'react-bootstrap';
import uniqid from 'uniqid';
class ShowTasks extends React.Component {
	state = {};
	render() {
		return (
			<>
				<Row className="mt-5">
					{this.props.tasksList.map((task, i) => (
						<Alert key={uniqid()} variant="warning">
							{task}
							<Button variant="danger" onClick={() => this.props.deleteItem(i)}>
								Delete
							</Button>
						</Alert>
					))}
				</Row>
			</>
		);
	}
}

export default ShowTasks;
