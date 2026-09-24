# TwoHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyFive } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: TwoHundredAndThirtyFive = {
  connectorId: "<id>",
  connectorService: "<value>",
  connectorType: "<value>",
  environment: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  host: "that-singing.name",
  projectId: "<id>",
  sessionId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `connectorId`      | *string*           | :heavy_check_mark: | N/A                |
| `connectorService` | *string*           | :heavy_check_mark: | N/A                |
| `connectorType`    | *string*           | :heavy_check_mark: | N/A                |
| `emailVerified`    | *boolean*          | :heavy_minus_sign: | N/A                |
| `environment`      | *string*           | :heavy_check_mark: | N/A                |
| `externalIssuer`   | *string*           | :heavy_check_mark: | N/A                |
| `externalSubject`  | *string*           | :heavy_check_mark: | N/A                |
| `host`             | *string*           | :heavy_check_mark: | N/A                |
| `installationId`   | *string*           | :heavy_minus_sign: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `sessionId`        | *string*           | :heavy_check_mark: | N/A                |
| `tenantId`         | *string*           | :heavy_minus_sign: | N/A                |