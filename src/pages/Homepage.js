import React from 'react'
import Layout from '../component/Layout'
import HeroSection from '../component/HeroSection'
import Grid from '../component/Grid'

function Homepage() {
  return (
    <Layout>
       <HeroSection />
       <section>
           <div className="container">
              <Grid className="grid">

              </Grid>
           </div>
       </section>
    </Layout>
  )
}

export default Homepage
