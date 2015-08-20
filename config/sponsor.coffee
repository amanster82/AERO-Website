module.exports =
    # from other sponsor file, this probably should be done in such a way that
    # these two files depend on one another, for now we know what the levels are so this
    # shouldnt be a problem
    # levels: [
    #     'Platinum',
    #     'Gold',
    #     'Silver',
    #     'Bronze'
    # ]
    levels:
        Platinum:
            cash: "$5,000+"
            rewards: [
                "Invitation to demonstration flights"
                "Large logo on aircraft, website and promotional material"
                "Free advertisement in the Engineering Student Newsletter by request"
            ]
        Gold:
            cash: "2500+"
            rewards:[
                "Medium logo on aircraft, website and promotional material"
                "Free advertisement in the Engineering Student Newsletter by request"
            ]
        Silver:
            cash: "1000+"
            rewards: [
                "Small logo on website and promotional material"
            ]
        Bronze:
            cash: "1000+"
            rewards: [
                "Small logo on website and promotional material"
            ]
    body:"""
        Without the backing of our sponsors and supporters we would not be able to finance various aspects of our operation. By becoming a supporter of our team you will receive media exposure at the competitions we attend and all of our demonstration flights. Support of our team also gives you and your company direction communication with some of the most motivated and hardworking students the University of Victoria has to offer.

        ## Donations

        If you wish simply to donate funds, equipment, or services to help support us and our mission, we will thank you for your gracious contribution on our webpage. In addition we will also provide you with a donation receipt as the University of Victoria is a registered charity.

        It is also possible to donate directly to our team online through the University of Victoria website. Please be sure to select “UVic AERO (Student UAV Engineering)” in the Designation field on the online donations page.

        Alternatively, cheques can be made out to “University of Victoria” containing “UVic AERO” in the memo section and mailed directly to the address below. Thank you for your interest in supporting our student team.

        ## Mailing Address
        ```
        University of Victoria
        Faculty of Engineering
        PO Box 3055 STN CSC
        Victoria, BC V8W 3P6
        ATTN: Jody Kitts
        ```

        ## Levels of Sponsorship

        Our team requires support to purchase airfare, rent hotel rooms, design and print team clothing and banners. We often pay these through cash sponsorship from individuals or companies. If your business provides one of these items as a service you may also donate them to be counted as a cash sponsorship. We currently offer three levels of advertisement, proportional to the size of the sponsorship; they are listed in the table below:

        Our team also requires equipment and off-the-shelf components to complete the unmanned system and test it. Similar to cash sponsorship, support through equipment and hardware sponsorship also have corresponding levels or advertisement as part of our thank you.

        Acknowledgement receipts are provided for all sponsorship contributions.

        If you're interested in discussing how you can support our team, please contact us.
    """
