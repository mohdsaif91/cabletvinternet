import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import XLSX from 'xlsx';

import { CustomerContext } from '../../Context/state/CustomerState';
import { AdminContext } from '../../Context/state/AdminState';
import Header from '../../components/layout/Header';
import PlanAndService from './columns/planAndService';
import Action from './columns/Action';
import Excel from '../../assets/images/excel-import.png';
import RightArrow from '../../assets/images/right-arrow.png';

export default function AdminPage() {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(moment().add(7, 'day').endOf('day').toDate());
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

	const importToExcel = () => {
		let customer = [
			[
				'createdAt',
				'fullName',
				'phoneNumber',
				'email',
				'planeTypeCommercial',
				'planeTypeResidential',
				'serviceTypePhone',
				'serviceTypeInternet',
				'serviceTypeCableTv',
			],
		];
		custData.map((m) => {
			let custArray = [
				m.createdAt,
				m.fullName,
				m.phoneNumber,
				m.email,
				m.planeTypeCommercial,
				m.planeTypeResidential,
				m.serviceTypePhone,
				m.serviceTypeInternet,
				m.serviceTypeCableTv,
			];
			customer.push(custArray);
		});
		const WB = XLSX.utils.book_new();
		const wsALL = XLSX.utils.aoa_to_sheet(customer);
		XLSX.utils.book_append_sheet(WB, wsALL, 'All Customer');
		XLSX.writeFile(WB, 'export-demo-customer.xlsx');
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
					<div className="data-filter">
						<div className="input-date">
							<div className="date-container">
								<div>
									<label className="date-label">Start Date</label>
									<DatePicker
										dateFormat="dd-MM-yyyy"
										placeholderText="Select the Start Date"
										className="date-picker-cont"
										selected={startDate}
										onChange={(date) => setStartDate(date)}
									/>
								</div>
								<div>
									<label className="date-label pr-12">End Date</label>
									<DatePicker
										dateFormat="dd-MM-yyyy"
										placeholderText="Select the End Date"
										className="date-picker-cont"
										selected={endDate}
										onChange={(date) => setEndDate(date)}
									/>
								</div>
							</div>
							<div className="get-data-btn">
								<button className="btn-action pointer get-data">Get Data</button>
							</div>
						</div>
						<div className="btn-container">
							<button
								className="btn-action pointer import-btn"
								disabled={custData.length === 0}
								onClick={() => importToExcel()}
							>
								<img className="import-img" src={RightArrow} />
								<img src={Excel} />
							</button>
						</div>
					</div>
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
