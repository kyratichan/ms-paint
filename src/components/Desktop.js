import React, { Component } from "react";
import { Link } from "react-router-dom";
import icon_folder from './images/icon_folder.png';
import icon_computer from './images/icon_computer.png';
import icon_network from './images/icon_network.png';
import icon_trash from './images/icon_trash.png';

const siteName = "Microsoft Paint";

//class component
class Desktop extends Component {
	render() {
		return (
			<main>
				<section className="min-vh-100 mt-0 pt-0 align-items-center bg-secondary">
					<div className="d-flex">
						<div className="ml-5 mr-4 mt-4 pt-5 col-md-4 text-center">
							<div className="row">
								<div>
									<img className="ml-5 mr-5 mt-5 mb-2" src={icon_computer} alt="My Computer" width="60px"></img>
									<p className="text-white mb-3">My Computer</p>
								</div>
							</div>
							<div className="row">
								<div className="text-center">
									<img className="ml-5 mr-5 mt-5 mb-2" src={icon_network} alt="Network Neighborhood" width="60px"></img>
									<p className="text-white mb-3">Network Neighborhood</p>
								</div>
								
							</div>
							<div className="row">
								<div className="text-center">
									<img className="ml-5 mr-5 mt-5 mb-2" src={icon_folder} alt="Folder" width="60px"></img>
									<p className="text-white mb-3">My Gallery</p>
								</div>
							</div>
							<div className="row">
								<div className="text-center">
									<img className="ml-5 mr-5 mt-5 mb-2" src={icon_trash} alt="Folder" width="60px"></img>
									<p className="text-white mb-3">Recycle Bin</p>
								</div>
							</div>
							
						</div>
						<div className="mt-5 pt-5 text-center align-center col-md-3">
							<br></br>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
							<br></br>
							<h1 className="mt-5 pt-5 mb-4">{siteName}</h1>
							<h6 className="tagline mb-4">Feeling nostalgic? Want to draw?</h6>
							<Link to="/paint" class="btn mt-2 mr-2 mb-2 btn-lg btn-primary" role="button">
								<span class="btn-text">
									Start
								</span>
							</Link>
						</div>
					</div>
				</section>
			</main>
		);
	}
}

export default Desktop;