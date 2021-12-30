import React from 'react';
import Link from 'next/link';
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react';

const Footer = () => (
  <Segment
    vertical
    as="footer"
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="Info" />
            <List>
              <List.Item>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Services" />
            <List>
              <List.Item>
                <Link href="/">
                  <a>All products</a>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Done for</Header>
            <p>
              Learn and research <a href="https://nextjs.org/">Nextjs</a>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="colophon">
        <p className="colophon-entry">
          Icons made by{' '}
          <a target="_blank" href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>
          {' from '}
          <a target="_blank" href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
        <p className="colophon-entry">
          Avocado images taken from{' '}
          <a
            className="acnor"
            target="_blank"
            href="https://www.californiaavocado.com/avocado101/avocado-varieties"
            title="California Avocado"
          >
            Avocado 101
          </a>
          {' at '}
          <a target="_blank" href="https://www.californiaavocado.com" title="Flaticon">
            California Avocado
          </a>
        </p>
      </div>
    </Container>

    <style jsx>{`
      .colophon {
        text-align: center;
        margin-top: 3.2rem;
        font-size: 0.8rem;
      }
      .colophon-entry {
        color: grey;
        margin-bottom: 0;
      }
    `}</style>
  </Segment>
);

export default Footer;
