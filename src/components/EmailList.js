import React, { Component } from 'react';
import EmailItem from './EmailItem';
import EmailActions from './EmailActions';

class EmailList extends Component {

    constructor (props) {
        super(props);
        this.state = {
            emails: [{
                "from": "mhallatt0@walmart.com",
                "to": "cziem0@surveymonkey.com",
                "subject": "Front End Challenge",
                "body": "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
                "date": "3/31/2017",
                "isReaded": true,
                "avatar": "https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",
                "tag": "Agave Lab",
                "attachements": [{
                    "file": "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
                    "name": "ut_nulla_sed.jpeg"
                }]
            },
            {
                "from": "nmulbery1@seattletimes.com",
                "to": "idimont1@usa.gov",
                "subject": "Technical Writer",
                "body": "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
                "date": "11/17/2016",
                "isReaded": false,
                "avatar": "https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1",
                "tag": "Teal",
                "attachements": [{
                    "file": "http://dummyimage.com/250x250.jpg/dddddd/000000",
                    "name": "sodales_scelerisque_mauris.jpeg"
                }]
            },
                {
                    "from": "nmulbery1@seattletimes.com",
                    "to": "idimont1@usa.gov",
                    "subject": "Technical Writer",
                    "body": "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
                    "date": "11/17/2016",
                    "isReaded": false,
                    "avatar": "https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1",
                    "tag": "Teal",
                    "attachements": [{
                        "file": "http://dummyimage.com/250x250.jpg/dddddd/000000",
                        "name": "sodales_scelerisque_mauris.jpeg"
                    }]
                },
                {
                    "from": "nmulbery1@seattletimes.com",
                    "to": "idimont1@usa.gov",
                    "subject": "Technical Writer",
                    "body": "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
                    "date": "11/17/2016",
                    "isReaded": false,
                    "avatar": "https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1",
                    "tag": "Teal",
                    "attachements": [{
                        "file": "http://dummyimage.com/250x250.jpg/dddddd/000000",
                        "name": "sodales_scelerisque_mauris.jpeg"
                    }]
                },
                {
                    "from": "nmulbery1@seattletimes.com",
                    "to": "idimont1@usa.gov",
                    "subject": "Technical Writer",
                    "body": "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
                    "date": "11/17/2016",
                    "isReaded": false,
                    "avatar": "https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1",
                    "tag": "Teal",
                    "attachements": [{
                        "file": "http://dummyimage.com/250x250.jpg/dddddd/000000",
                        "name": "sodales_scelerisque_mauris.jpeg"
                    }]
                },
                {
                    "from": "nmulbery1@seattletimes.com",
                    "to": "idimont1@usa.gov",
                    "subject": "Technical Writer",
                    "body": "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
                    "date": "11/17/2016",
                    "isReaded": false,
                    "avatar": "https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1",
                    "tag": "Teal",
                    "attachements": [{
                        "file": "http://dummyimage.com/250x250.jpg/dddddd/000000",
                        "name": "sodales_scelerisque_mauris.jpeg"
                    }]
                },
                {
                    "from": "nmulbery1@seattletimes.com",
                    "to": "idimont1@usa.gov",
                    "subject": "Technical Writer",
                    "body": "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
                    "date": "11/17/2016",
                    "isReaded": false,
                    "avatar": "https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1",
                    "tag": "Teal",
                    "attachements": [{
                        "file": "http://dummyimage.com/250x250.jpg/dddddd/000000",
                        "name": "sodales_scelerisque_mauris.jpeg"
                    }]
                },
                {
                    "from": "nmulbery1@seattletimes.com",
                    "to": "idimont1@usa.gov",
                    "subject": "Technical Writer",
                    "body": "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
                    "date": "11/17/2016",
                    "isReaded": false,
                    "avatar": "https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1",
                    "tag": "Teal",
                    "attachements": [{
                        "file": "http://dummyimage.com/250x250.jpg/dddddd/000000",
                        "name": "sodales_scelerisque_mauris.jpeg"
                    }]
                },
                {
                    "from": "nmulbery1@seattletimes.com",
                    "to": "idimont1@usa.gov",
                    "subject": "Technical Writer",
                    "body": "sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
                    "date": "11/17/2016",
                    "isReaded": false,
                    "avatar": "https://robohash.org/aliquamautdolore.jpg?size=50x50&set=set1",
                    "tag": "Teal",
                    "attachements": [{
                        "file": "http://dummyimage.com/250x250.jpg/dddddd/000000",
                        "name": "sodales_scelerisque_mauris.jpeg"
                    }]
                }
            ]
        }
    }

    handleClick = (e) => {
        e.stopPropagation();
        e.target.classList.toggle('active');
        console.dir(e.target);
    }

    render() {
        return (
            <div className="email-list">
                <EmailActions />
                {this.state.emails.map((email, index) => 
                    <EmailItem click={this.handleClick} index={index} email={email} key={index} />
                )}
            </div>
        )
    }
}

export default EmailList;