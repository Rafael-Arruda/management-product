import { useEffect, useState } from "react";






import { useParams } from "react-router-dom";
import { getInfoEmpresa, getServiceType } from "../../services/agendamento";
import { Button, ButtonItemFooterCard, CenterFullScreen, Conteiner, Content, ContentHeaderCard, FooterCard, H1, Header, HeaderBlock, HeaderCard, ImageHeaderCard, ItemFooterCard, Loading, Logo, Parag, ServiceCard, SocialMediaBlock, TextHeaderCard, TimeItemFooterCard, TitleHeaderCard, ValueItemFooterCard } from "./style";


import corte_example from '../../assets/corte_example.jpeg';
import socialFacebook from '../../assets/social_facebook.png';
import socialInstagram from '../../assets/social_instagram.png';
import socialWhatsapp from '../../assets/social_whatsapp.png';
export default function Agendamento() {

    const [form, setForm] = useState({});
    const [formData, setFormData] = useState({});


    const { empresa } = useParams();


    // Chamada da API - Lista todos os materiais
    useEffect(() => {

        const fetchData = async () => {
            try {
                Promise.all([getServiceType(empresa), getInfoEmpresa(empresa)])
                .then(([serviceType, entrepriseInfo]) => {
                    setFormData((prev)=>({serviceType, entrepriseInfo}));
                })
            } catch (error) {
                console.error("Erro ao buscar:", error);
            }
        };
        fetchData();
    }, []);

    console.log('empresa',empresa);
    console.log(formData);

    if(!formData.entrepriseInfo){
        return <CenterFullScreen><Loading/></CenterFullScreen>;
    }

    return (
        <Conteiner>
            <Header>
                <HeaderBlock><Logo src={formData.entrepriseInfo.logo} /></HeaderBlock>
                <HeaderBlock>
                    <H1>{formData.entrepriseInfo.des_nome}</H1>
                    <Parag>{formData.entrepriseInfo.street}</Parag>
                    <Parag>{formData.entrepriseInfo.cidade} - CEP: {formData.entrepriseInfo.cep}</Parag>
                    <Parag>{formData.entrepriseInfo.telefone}</Parag>
                </HeaderBlock>
                <HeaderBlock>
                    <Button>Meus agendamentos</Button>
                    <SocialMediaBlock>
                        <a href="#"><img src={socialWhatsapp} /></a>
                        <a href="#"><img src={socialInstagram} /></a>
                        <a href="#"><img src={socialFacebook} /></a>
                    </SocialMediaBlock>
                </HeaderBlock>
            </Header>
            <Content>
                <ServiceCard>
                    <HeaderCard>
                        <ImageHeaderCard imageUrl={corte_example}/>
                        {/* <img src={corte_example} width={64}/> */}
                        <ContentHeaderCard>
                            <TitleHeaderCard>Corte</TitleHeaderCard>
                            <TextHeaderCard>Sem obs </TextHeaderCard>
                        </ContentHeaderCard>
                    </HeaderCard>
                    <FooterCard>
                        <ItemFooterCard><TimeItemFooterCard>30min</TimeItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ValueItemFooterCard>R$ 30,00</ValueItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ButtonItemFooterCard>+</ButtonItemFooterCard></ItemFooterCard>
                    </FooterCard>
                </ServiceCard>

                
                <ServiceCard>
                    <HeaderCard>
                        <ImageHeaderCard imageUrl={corte_example}/>
                        {/* <img src={corte_example} width={64}/> */}
                        <ContentHeaderCard>
                            <TitleHeaderCard>Corte</TitleHeaderCard>
                            <TextHeaderCard>Sem obs </TextHeaderCard>
                        </ContentHeaderCard>
                    </HeaderCard>
                    <FooterCard>
                        <ItemFooterCard><TimeItemFooterCard>30min</TimeItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ValueItemFooterCard>R$ 30,00</ValueItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ButtonItemFooterCard>+</ButtonItemFooterCard></ItemFooterCard>
                    </FooterCard>
                </ServiceCard>

                <ServiceCard>
                    <HeaderCard>
                        <ImageHeaderCard imageUrl={corte_example}/>
                        {/* <img src={corte_example} width={64}/> */}
                        <ContentHeaderCard>
                            <TitleHeaderCard>Corte</TitleHeaderCard>
                            <TextHeaderCard>Sem obs </TextHeaderCard>
                        </ContentHeaderCard>
                    </HeaderCard>
                    <FooterCard>
                        <ItemFooterCard><TimeItemFooterCard>30min</TimeItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ValueItemFooterCard>R$ 30,00</ValueItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ButtonItemFooterCard>+</ButtonItemFooterCard></ItemFooterCard>
                    </FooterCard>
                </ServiceCard>

                <ServiceCard>
                    <HeaderCard>
                        <ImageHeaderCard imageUrl={corte_example}/>
                        {/* <img src={corte_example} width={64}/> */}
                        <ContentHeaderCard>
                            <TitleHeaderCard>Corte</TitleHeaderCard>
                            <TextHeaderCard>Sem obs </TextHeaderCard>
                        </ContentHeaderCard>
                    </HeaderCard>
                    <FooterCard>
                        <ItemFooterCard><TimeItemFooterCard>30min</TimeItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ValueItemFooterCard>R$ 30,00</ValueItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ButtonItemFooterCard>+</ButtonItemFooterCard></ItemFooterCard>
                    </FooterCard>
                </ServiceCard>


                <ServiceCard>
                    <HeaderCard>
                        <ImageHeaderCard imageUrl={corte_example}/>
                        {/* <img src={corte_example} width={64}/> */}
                        <ContentHeaderCard>
                            <TitleHeaderCard>Corte</TitleHeaderCard>
                            <TextHeaderCard>Sem obs </TextHeaderCard>
                        </ContentHeaderCard>
                    </HeaderCard>
                    <FooterCard>
                        <ItemFooterCard><TimeItemFooterCard>30min</TimeItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ValueItemFooterCard>R$ 30,00</ValueItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ButtonItemFooterCard>+</ButtonItemFooterCard></ItemFooterCard>
                    </FooterCard>
                </ServiceCard>


                <ServiceCard>
                    <HeaderCard>
                        <ImageHeaderCard imageUrl={corte_example}/>
                        {/* <img src={corte_example} width={64}/> */}
                        <ContentHeaderCard>
                            <TitleHeaderCard>Corte</TitleHeaderCard>
                            <TextHeaderCard>Sem obs </TextHeaderCard>
                        </ContentHeaderCard>
                    </HeaderCard>
                    <FooterCard>
                        <ItemFooterCard><TimeItemFooterCard>30min</TimeItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ValueItemFooterCard>R$ 30,00</ValueItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ButtonItemFooterCard>+</ButtonItemFooterCard></ItemFooterCard>
                    </FooterCard>
                </ServiceCard>


                <ServiceCard>
                    <HeaderCard>
                        <ImageHeaderCard imageUrl={corte_example}/>
                        {/* <img src={corte_example} width={64}/> */}
                        <ContentHeaderCard>
                            <TitleHeaderCard>Corte</TitleHeaderCard>
                            <TextHeaderCard>Sem obs </TextHeaderCard>
                        </ContentHeaderCard>
                    </HeaderCard>
                    <FooterCard>
                        <ItemFooterCard><TimeItemFooterCard>30min</TimeItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ValueItemFooterCard>R$ 30,00</ValueItemFooterCard></ItemFooterCard>
                        <ItemFooterCard><ButtonItemFooterCard>+</ButtonItemFooterCard></ItemFooterCard>
                    </FooterCard>
                </ServiceCard>


            </Content>
        </Conteiner>
    )
}