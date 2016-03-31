'use strict';

angular.module('gapco')
        .service('PortfService', function() {
        
        var portfolio=[
            {
                name:"Homemaker",
                logo:"img/homemaker.png",
                image:"img/homemaker-demo.png",
                description:"Homemaker Pvt. Ltd. was established in December 1982 with the concept of introducing professional interior design services and innovative furniture in Nepal. Since then, the company has been providing comprehensive architectural work services, design-and-build interiors as well as supply of furniture to various national and multinational agencies on a turnkey basis. Over the years, the company has earned reputation for customer satisfaction by providing innovative design, quality product, on time delivery and competitive price."
                  
            },
            
            {
                name:"Intertours Nepal",
                logo:"img/intertours.jpg",
                image:"img/intertours-demo.png",
                description:"INTERTOURS NEPAL was established in 1987 under license from the Ministry of Tourism, Government of Nepal. Our organization has qualitatively grown over the years to now employ 45 full time dedicated travel professionals who are trained to offer only the best of what our country has to offer. We not only plan all holidays down to the minutest detail for your clients to ensure their enjoyable experiences while visiting our area, but also provide a virtual guarantee of value for money."
                  
            },
            
            {
                name:"The Last Frontiers",
                logo:"img/tlf.png",
                image:"img/tlf-demo.png",
                description:"The industry, partner and customer satisfaction that Last Frontiers Trekking has won are testimony to our excellent reputation and unbeatable experience in the region. Much of our growing business comes from referrals, and we are always happy to provide references. Our partner portfolio includes several well recognized travel agents, and suppliers and leading experts and professionals from all corners of the globe."
                  
            },
        ];
        
        this.getPFs = function(){
                            return portfolio;
                        };
        
        this.getPF = function (index) {
                            return portfolio[index];

                        };

        });