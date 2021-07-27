import { Component } from 'react';
import '../styles/Add.css';
import {
	Alert,
	Form,
	FormControl,
	Button,
	Container,
	Row,
	Col,
} from 'react-bootstrap';
import ShowTasks from './ShowTasks';
import uniqid from 'uniqid';

class AddTasks extends Component {
	state = {
		singleTask: ' ',
		Task: [],
	};

	takeValues = (e) => {
		e.preventDefault();
		this.setState({ singleTask: e.target.value });
	};

	addTasks = () => {
		this.setState({
			Task: [...this.state.Task, this.state.singleTask],
		});
	};

	deleteItem = (index) => {
		const newTasks = this.state.Task.filter((t, i) => i !== index);

		this.setState({ Task: newTasks });
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
					<Row>
						<ShowTasks
							tasksList={this.state.Task}
							deleteItem={this.deleteItem}
						/>
					</Row>
				</Container>
			</>
		);
	}
}

export default AddTasks;
