'use client';
import styles from './page.module.css';
import { Container, Row, Col, Button, Link, Text, Card, Input, Grid, Checkbox } from "@nextui-org/react";

export default function SignUp(){
    return ( 
        <form>
              <Card css={{ $$cardColor: '$colors$white' }}>
                <Card.Body>
                  <Row justify="center" align="center">
                    <Grid.Container gap={4}>
                      <Col>
                        <Grid>
                          <Input
                            clearable
                            underlined 
                            labelPlaceholder="User Name"
                            helperText="Insecure your name"
                            color="secondary" 
                            />
                        </Grid>
                        <Grid>
                          <Input
                            clearable
                            underlined 
                            labelPlaceholder="User ID" 
                            helperText="Insecure your id"
                            color="secondary" 
                            />
                        </Grid>
                        <Grid>
                          <Input.Password
                            clearable
                            underlined
                            type="password"
                            label="Password"
                            labelPlaceholder="Password"
                            helperText="Insecure password"
                            color="secondary" 
                            />
                        </Grid>
                        <Grid>
                          <Input 
                            underlined 
                            labelPlaceholder="E-mail" 
                            color="secondary"
                          />
                        </Grid>
                        <Row justify="center" align="center">
                          <Grid>
                            <Checkbox color="gradient" defaultSelected={true}>
                              Gradient
                            </Checkbox>
                          </Grid>
                          <Grid>
                            <Button color="gradient" auto ghost>
                              Gradient
                            </Button>
                          </Grid>
                        </Row>
                      </Col>
                    </Grid.Container>
                  </Row>
                </Card.Body>
              </Card>
        </form>
    );
};

