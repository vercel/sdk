# TwoHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixteen } from "@vercel/sdk/models/payloadroles.js";

let value: TwoHundredAndSixteen = {
  projectId: "<id>",
  environment: "<value>",
  host: "some-middle.net",
  connectorId: "<id>",
  connectorType: "<value>",
  connectorService: "<value>",
  externalIssuer: "<value>",
  externalSubject: "<value>",
  sessionId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `environment`      | *string*           | :heavy_check_mark: | N/A                |
| `host`             | *string*           | :heavy_check_mark: | N/A                |
| `connectorId`      | *string*           | :heavy_check_mark: | N/A                |
| `connectorType`    | *string*           | :heavy_check_mark: | N/A                |
| `connectorService` | *string*           | :heavy_check_mark: | N/A                |
| `externalIssuer`   | *string*           | :heavy_check_mark: | N/A                |
| `externalSubject`  | *string*           | :heavy_check_mark: | N/A                |
| `sessionId`        | *string*           | :heavy_check_mark: | N/A                |
| `emailVerified`    | *boolean*          | :heavy_minus_sign: | N/A                |
| `tenantId`         | *string*           | :heavy_minus_sign: | N/A                |
| `installationId`   | *string*           | :heavy_minus_sign: | N/A                |