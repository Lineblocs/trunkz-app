import React, { useState } from "react";
import { Tab, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const CreateNewTrunks = () => {
    const initialTabData = [
        {
          name: 'Details',
          inputs: [{ placeholder: "Name", value: "" , info: 'The username you will use to login to your trunk with'}],
          toggleSwitch: false
        },
        {
          name: 'Origination',
          inputs: [
            { placeholder: "SIP URI", value: "" , info: 'Incoming calls will be routed to SIP URI and this must be a FQDN and include SIP protocol. or example: if your SIP infrastructure is located at example.org use sip:example.org:5060'},
            { placeholder: "Recovery SIP URI", value: "", info: 'Incoming calls will be routed to SIP URI and this must be a FQDN and include SIP protocol. or example: if your SIP infrastructure is located at example.org use sip:example.org:5060'},
          ] ,
        },
        {
          name: 'Termination',
          inputs: [{ placeholder: "Termination SIP URI", value: "", label: '.pstn.', info: "Set the domain name for routing calls from your SIP infrastructure to Lineblocs gateway.The chosen name will be used in the domain and included in the prefix of the FQDN. For example,if you use 'trunk' then your SIP URI will be:{your-trunk-name}.pstn.lineblocs.com"}]
        },
        {
          name: 'Did Numbers',
          inputs: [],
          text: 'Select the DID numbers that you want to connect with your trunk',
          note: 'if the DID is already setup with a call flow it will be greyed out, and you will need to unlink the flow before you can link it to your trunk',
        },
    ];

    const [tabData, setTabData] = useState(initialTabData);

    const handleInputChange = (tabIndex, inputIndex, event) => {
        const newTabData = [...tabData];
        newTabData[tabIndex].inputs[inputIndex].value = event.target.value;
        setTabData(newTabData);
    };

    const handleSwitchChange = (tabIndex, event) => {
        const newTabData = [...tabData];
        newTabData[tabIndex].toggleSwitch = event.target.checked;
        setTabData(newTabData);
    };

    return (
        <div className="h-100">
            <div className="col-xl-12 bg-white rounded py-3 px-md-3 mb-4">
                <div className="col-xl-9 col-lg-8 d-flex flex-wrap">
                    <h6 className="text-black fs-15 mb-1">
                        create a hosted trunk to route traffic to your own SIP infrastructure
                    </h6>
                </div>
                <div className='custom-tab-1 my-2'>
                    <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                        <Nav as='ul' className='nav-tabs'>
                            {tabData.map((data, i) => (
                            <Nav.Item as='li' key={i}>
                                <Nav.Link eventKey={data.name.toLowerCase()}>
                                    {data.name.toUpperCase()}
                                </Nav.Link>
                            </Nav.Item>
                            ))}
                        </Nav>
                        <Tab.Content className='pt-4'>
                            {tabData.map((tab, tabIndex) => (
                            <Tab.Pane eventKey={tab.name.toLowerCase()} key={tabIndex}>
                                {tab.inputs.map((input, inputIndex) => (
                                    <div className="mb-3 d-flex" key={inputIndex}>
                                        <input
                                            className="form-control input-default input-radius"
                                            placeholder={input.placeholder}
                                            value={input.value}
                                            onChange={(event) => handleInputChange(tabIndex, inputIndex, event)}
                                        />
                                        {input.label && 
                                            <div className="input-group-append">
                                                <span className="input-group-text">{input.label}</span>
                                            </div>}
                                        <div className="align-items-center input-group-append mx-3">
                                            <OverlayTrigger
                                                overlay={<Tooltip id={`tooltip-${tabIndex}-${inputIndex}`}>{input.info}</Tooltip>}
                                            >
                                                <i className="fa fa-info-circle"></i>
                                            </OverlayTrigger>
                                        </div>
                                    </div>
                                ))}
                                {tab.toggleSwitch !== undefined && <Form.Check 
                                    className="mb-3 mx-1"
                                    type="switch"
                                    id={`switch-${tabIndex}`}
                                    label="Record calls"
                                    checked={tab.toggleSwitch}
                                    onChange={(event) => handleSwitchChange(tabIndex, event)}
                                />}
                                {tab.text && <p>{tab.text}</p>}
                                {tab.note && <p><b className="text-black">Note: </b>{tab.note}</p>}
                            </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Tab.Container>
                    <a className="btn btn-primary btn-rounded mb-2" href="/react/demo/profile">Save</a>
                    <a className="btn btn-dark light btn-rounded mr-3 mb-2 mx-2">Cancel</a>
                </div>
            </div>
        </div>
    );
 };
 
 export default CreateNewTrunks;