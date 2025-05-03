import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const QuoteRequestEmail = ({
  name,
  email,
  phone,
  service,
  bikeType,
  rimType,
  message,
}) => {
  // Format service and bike type for better readability
  const formattedService = service
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const formattedBikeType =
    bikeType.charAt(0).toUpperCase() + bikeType.slice(1);

  return (
    <Html>
      <Head />
      <Preview>New quote request from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Quote Request</Heading>
          <Text style={text}>
            You have received a new quote request with the following details:
          </Text>

          <Section style={detailsSection}>
            <Text style={detailRow}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={detailRow}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={detailRow}>
              <strong>Phone:</strong> {phone || "Not provided"}
            </Text>
            <Text style={detailRow}>
              <strong>Service:</strong> {formattedService}
            </Text>
            <Text style={detailRow}>
              <strong>Bike Type:</strong> {formattedBikeType}
            </Text>
            {rimType && (
              <Text style={detailRow}>
                <strong>Rim Type:</strong> {rimType}
              </Text>
            )}
          </Section>

          <Hr style={hr} />

          <Heading as="h2" style={h2}>
            Message
          </Heading>
          <Text style={messageText}>{message || "No message provided."}</Text>

          <Hr style={hr} />

          <Text style={footer}>
            This email was sent from your website's contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
  borderRadius: "4px",
  border: "1px solid #e9e9e9",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
  lineHeight: "1.5",
};

const h2 = {
  color: "#333",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "20px 0 10px",
  padding: "0",
  lineHeight: "1.5",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "16px 0",
};

const detailsSection = {
  backgroundColor: "#f9f9f9",
  padding: "15px",
  borderRadius: "4px",
  margin: "20px 0",
};

const detailRow = {
  margin: "8px 0",
  fontSize: "15px",
  lineHeight: "1.4",
};

const messageText = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "16px 0",
  whiteSpace: "pre-line",
};

const hr = {
  borderColor: "#e9e9e9",
  margin: "20px 0",
};

const footer = {
  color: "#888888",
  fontSize: "14px",
  margin: "20px 0",
  fontStyle: "italic",
};

export default QuoteRequestEmail;
