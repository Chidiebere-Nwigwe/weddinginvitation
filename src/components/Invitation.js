import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import Destination from './Destination'
import InvitationCard from './InvitationCard'
import Travel from './Travel'
import WeddingAttire from './WeddingAttire'
import RSVPForm from './RSVPForm'
import ThankYou from './ThankYou'
import AudioTag from './AudioTag'
const Invitation = (props) => {
  return (
    
    <div>
        <Header> EMEKA & OBY </Header>
        <HeroSection />
        <Destination />
        <InvitationCard />
        <Travel />
        <WeddingAttire />
        <RSVPForm />
        <ThankYou />
        <AudioTag />
    </div>
  )
}

export default Invitation