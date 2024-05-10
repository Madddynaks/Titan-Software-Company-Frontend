import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Row, Col, Crad, Card } from 'reactstrap'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (

        <>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <p className='home1para'>CASE STUDIES</p>
                <h1>Detailing of our products</h1>
            </div>


            <Box sx={{ width: '100%', backgroundColor: 'white', marginTop: '50px' }}>
                <AppBar position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Development" {...a11yProps(0)} />
                        <Tab label="Woo Commerce" {...a11yProps(1)} />
                        <Tab label="CRM Solutions" {...a11yProps(2)} />
                        <Tab label="Web Designing" {...a11yProps(3)} />
                        <Tab label="IT Support" {...a11yProps(4)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Row>
                            <Col md={8} className='tabcard1'>
                                <Card style={{ borderRadius: '15px' }} >
                                    <Row>
                                        <Col md={6}>
                                            <div style={{ position: 'relative' }}>
                                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/case-studio-1-1-1.jpg" alt="" />
                                                <div className='tabcardbtn'  >
                                                    <p  >Web Development  </p>
                                                </div>
                                            </div>

                                        </Col>
                                        <Col md={6}>
                                            <div style={{ position: 'relative' }}>
                                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/case-studio-1-1-1.jpg" alt="" />
                                                <div className='tabcardbtn1'>
                                                    <p>Mobile Development </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>

                            </Col>
                            <Col md={4}>
                                <Card className='tabcard' >
                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg" alt="" className='tabcadlogo' />
                                    <h4>Development</h4>
                                    <p className='tabcardtext' >Software development is a dynamic and rapidly evolving field that plays a pivotal role in
                                        shaping the digital landscape we live in today. It encompasses the processes, methodologies,
                                        and practices used to design, create, deploy, and maintain software applications and systems.</p>
                                </Card>
                            </Col>
                        </Row>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Row>
                            <Col md={8} className='tabcard1'>
                                <Card style={{ borderRadius: '15px' }} >
                                    <Row>
                                        <Col md={6}>
                                            <div style={{ position: 'relative' }}>
                                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-10.jpg" alt="" />
                                                <div className='tabcardbtn'  >
                                                    <p  >electro. </p>
                                                </div>
                                            </div>

                                        </Col>
                                        <Col md={6}>
                                            <div style={{ position: 'relative' }}>
                                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-6.jpg" alt="" />
                                                <div className='tabcardbtn'  >
                                                    <p>Visit Site Now  </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className='tabcard' >
                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg" alt="" className='tabcadlogo' />
                                    <h4>Development</h4>
                                    <p className='tabcardtext' >Software development is a dynamic and rapidly evolving field that plays a pivotal role in
                                        shaping the digital landscape we live in today. It encompasses the processes, methodologies,
                                        and practices used to design, create, deploy, and maintain software applications and systems.</p>
                                </Card>
                            </Col>
                        </Row>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <Row>

                            <Col md={8} className='tabcard1'>
                                <Card style={{ borderRadius: '15px' }} >
                                    <Row>
                                        <Col md={6}>
                                            <div style={{ position: 'relative' }}>
                                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-5.jpg" alt="" />
                                                <div className='tabcardbtn'  >
                                                    <p >CRM Solutions</p>
                                                </div>
                                            </div>

                                        </Col>
                                        <Col md={6}>
                                            <div style={{ position: 'relative' }}>
                                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-6.jpg" alt="" />
                                                <div className='tabcardbtn1'>
                                                    <p>Mobile Development  </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>



                            <Col md={4}>
                                <Card className='tabcard' >
                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg" alt="" className='tabcadlogo' />
                                    <h4>CRM Solutions</h4>
                                    <p className='tabcardtext' >Software development is a dynamic and rapidly evolving field that plays a pivotal role in
                                        shaping the digital landscape we live in today. It encompasses the processes, methodologies,
                                        and practices used to design, create, deploy, and maintain software applications and systems.</p>
                                </Card>
                            </Col>
                        </Row>
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                        <Row>
                            <Col md={8} className='tabcard1'>
                                <Card style={{ borderRadius: '15px', border : '2px solid white'}} >
                                    <Row>
                                        <Col md={6}>
                                            <div style={{ position:'relative' }}>
                                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-7.jpg" alt="" />
                                                <div className='tabcardbtn'  >
                                                    <p >CRM Solutions</p>
                                                </div>
                                            </div>

                                        </Col>
                                        <Col md={6}>
                                            <div style={{ position: 'relative' }}>
                                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-6.jpg" alt="" />
                                                <div className='tabcardbtn1'>
                                                    <p  >Mobile Development  </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                </Card>


                            </Col>
                            <Col md={4}>
                                <Card className='tabcard' >
                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-4-2.svg" alt=""  className='tabcadlogo' />
                                    <h4>Web Designing</h4>
                                    <p className='tabcardtext' >Software development is a dynamic and rapidly evolving field that plays a pivotal role in
                                        shaping the digital landscape we live in today. It encompasses the processes, methodologies,
                                        and practices used to design, create, deploy, and maintain software applications and systems.</p>
                                </Card>
                            </Col>
                        </Row>
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                        <Row>
                            <Col md={8} className='tabcard1'>
                                <Card style={{ borderRadius: '15px' }} >
                                    <Row>
                                        <Col md={6}>
                                            <div style={{ position: 'relative' }}>
                                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-9.jpg" alt="" />
                                                <div className='tabcardbtn' >
                                                    <p>IT Support </p>
                                                </div>
                                            </div>

                                        </Col>
                                        <Col md={6}>
                                            <div style={{ position: 'relative' }}>
                                                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/case-studio-10.jpg" alt="" />
                                                <div className='tabcardbtn1'>
                                                    <p>Mobile Development </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>

                            </Col>
                            <Col md={4}>
                                <Card className='tabcard' >
                                    <img src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-5-2.svg" alt="" className='tabcadlogo' />
                                    <h4>IT Support</h4>
                                    <p className='tabcardtext' >Software development is a dynamic and rapidly evolving field that plays a pivotal role in
                                        shaping the digital landscape we live in today. It encompasses the processes, methodologies,
                                        and practices used to design, create, deploy, and maintain software applications and systems.</p>
                                </Card>
                            </Col>
                        </Row>

                    </TabPanel>
                </SwipeableViews>
            </Box>
        </>
    );
}
