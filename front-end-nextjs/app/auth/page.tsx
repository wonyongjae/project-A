'use client';
import styles from './page.module.css';
import { 
    Container, 
    Row, 
    Col, 
    Button, 
    Link, 
    Text, 
    Card, 
    Input, 
    Grid, 
    Checkbox } from "@nextui-org/react";

export default function Auth(){
    return ( 
        <form>
            <Container>
              <Card css={{ $$cardColor: '$colors' }}>
                <Card.Body>
                  <Row justify="center" align="center">
                    <Grid.Container gap={4}>
                      <Grid>
                        <Input 
                          underlined 
                          labelPlaceholder="Secondary" 
                          color="secondary" 
                        />
                      </Grid>
                      <Grid>
                        <Input 
                          underlined 
                          labelPlaceholder="Secondary" 
                          color="secondary" 
                        />
                      </Grid>
                    </Grid.Container>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
        </form>
    );
};

