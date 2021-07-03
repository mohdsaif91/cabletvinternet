import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

import { CustomerContext } from '../../Context/state/CustomerState';
import { AdminContext } from '../../Context/state/AdminState';
import Header from '../../components/layout/Header';
import PlanAndService from './columns/planAndService';
import Action from './columns/Action';

export default function AdminPage() {
	const { getCustomerData, custData } = useContext(CustomerContext);
	const { adminSucess, logout } = useContext(AdminContext);

	const history = useHistory();

	useEffect(() => {
		getCustomerData();
	}, []);

	const logoutAdmin = () => {
		history.push('/');
		logout();
	};
	console.log(custData, '<>?');
	const columns = [
		{
			Header: 'Customer Data',
			columns: [
				{
					Header: 'Time',
					headerClassName: 'time',
					className: 'time-col',
					accessor: (props) => moment(props.createdAt).format('DD/MM/YYYY'),
					id: 'createdAt',
				},
				{
					Header: 'Full Name',
					headerClassName: 'full-name',
					className: 'full-name-col',
					accessor: 'fullName',
					id: 'fullName',
				},
				{
					Header: 'Phone Number',
					className: 'col',
					accessor: 'phoneNumber',
					id: 'phoneNumber',
				},
				{
					Header: 'Email',
					headerClassName: 'email',
					className: 'email-col',
					accessor: 'email',
					id: 'email',
				},
			],
		},

		{
			Header: 'Plans',
			columns: [
				{
					Header: 'Commercial',
					headerClassName: 'com-hed',
					className: 'com-col img-col',
					accessor: (props) => (
						<PlanAndService
							title="Commercial"
							flag={props.planeTypeCommercial}
							type="Commercial"
						/>
					),
					id: 'planeTypeCommercial',
				},
				{
					Header: 'Residential',
					headerClassName: 'com-hed',
					className: 'com-col img-col',
					accessor: (props) => (
						<PlanAndService type="Residential" flag={props.planeTypeResidential} />
					),
					id: 'planeTypeResidential',
				},
			],
		},
		{
			Header: 'Service',
			columns: [
				{
					Header: 'Phone',
					headerClassName: 'phone-hed',
					className: 'phone-col img-col',
					accessor: (props) => (
						<PlanAndService type="Phone" flag={props.planeTypeResidential} />
					),
					id: 'serviceTypePhone',
				},
				{
					Header: 'Internet',
					headerClassName: 'phone-hed',
					className: 'phone-col img-col',
					accessor: (props) => (
						<PlanAndService type="Internet" flag={props.serviceTypeInternet} />
					),
					id: 'serviceTypeInternet',
				},
				{
					Header: 'Cable',
					headerClassName: 'phone-hed',
					className: 'phone-col img-col',
					accessor: (props) => (
						<PlanAndService type="Cable" flag={props.serviceTypeCableTv} />
					),
					id: 'serviceTypeCableTv',
				},
			],
		},
		{
			Header: 'Actions',
			accessor: (props) => <Action id={props._id} />,
			id: 'action',
		},
	];

	return (
		<div>
			<Header
				navPosition="right"
				className="reveal-from-bottom mb-16"
				logout={() => logoutAdmin()}
				adminSucess={adminSucess}
			/>
			<div>
				<div className="heading">
					<h3>Customer Inquires</h3>
				</div>
				<ReactTable
					className="react-table"
					data={custData}
					columns={columns}
					pageSize={50}
				/>
			</div>
		</div>
	);
}
