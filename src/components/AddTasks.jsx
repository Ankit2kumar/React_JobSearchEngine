import { Component } from 'react';
import '../styles/Add.css';
import {
	Form,
	FormControl,
	Button,
	Container,
	Row,
	Col,
	Alert,
} from 'react-bootstrap';

class AddTasks extends Component {
	state = {
		singleTask: ' ',
		Task: [],
	};

	takeValues = (e) => {
		this.setState({ singleTask: e.target.value });
	};

	addTasks = () => {
		this.setState({
			Task: [...this.state.Task, this.state.singleTask],
		});
	};

	render() {
		return (
			<>
				<Container>
					<Row className="">
						<Col className="mt-5 add">
							<Form onChange={this.takeValues}>
								<FormControl
									type="text"
									placeholder="Add Tasks"
									className="mr-2"
								/>
							</Form>
						</Col>
						<Col className="mt-5">
							<Button variant="success " onClick={this.addTasks}>
								Add Tasks
							</Button>
						</Col>
					</Row>
					<Row className="mt-5">
						{this.state.Task.map((task, id) => (
							<Alert key={id} variant="warning">
								{task}
							</Alert>
						))}
					</Row>
				</Container>
			</>
		);
	}
}

export default AddTasks;
