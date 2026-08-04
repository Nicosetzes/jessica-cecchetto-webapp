import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type Props = {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  reason: string;
};

function EmailTemplate({ firstName, lastName, email, reason, message }: Props) {
  return (
    <Html>
      <Head />
      <Preview>
        New inquiry from {firstName} {lastName}
      </Preview>
      <Body style={body}>
        <Container style={container}>
          <Heading style={heading}>New Contact Request</Heading>
          <Text
            style={{
              color: "#5f6f62",
              fontSize: "15px",
              marginBottom: "24px",
            }}
          >
            A new inquiry has been submitted through the website contact form.
          </Text>
          <Section style={card}>
            <Text style={fieldLabel}>Name</Text>
            <Text style={fieldValue}>
              {firstName} {lastName}
            </Text>

            <Text style={fieldLabel}>Email</Text>
            <Text style={fieldValue}>{email}</Text>

            <Text style={fieldLabel}>Reason</Text>
            <Text style={fieldValue}>{reason}</Text>
          </Section>

          <Section style={messageCard}>
            <Text style={fieldLabel}>Message</Text>
            <Text
              style={{
                ...fieldValue,
                whiteSpace: "pre-wrap",
                marginBottom: 0,
              }}
            >
              {message}
            </Text>
          </Section>
          <Text
            style={{
              color: "#7a807b",
              fontSize: "12px",
              marginTop: "32px",
            }}
          >
            This message was sent from the contact form on the Jesica Cecchetto
            website.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default EmailTemplate;

const body = {
  backgroundColor: "#f6f7f5",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  maxWidth: "640px",
  margin: "40px auto",
  padding: "40px",
  borderRadius: "12px",
  border: "1px solid #e6e9e5",
};

const heading = {
  color: "#6f8f72",
  fontSize: "28px",
  marginBottom: "32px",
};

const card = {
  backgroundColor: "#f8faf8",
  border: "1px solid #dfe7e0",
  borderRadius: "8px",
  padding: "24px",
  marginBottom: "24px",
};

const messageCard = {
  backgroundColor: "#ffffff",
  border: "1px solid #dfe7e0",
  borderRadius: "8px",
  padding: "24px",
};

const fieldLabel = {
  color: "#6f8f72",
  fontSize: "13px",
  fontWeight: "600",
  margin: "0 0 4px",
};

const fieldValue = {
  color: "#2f3430",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px",
};
