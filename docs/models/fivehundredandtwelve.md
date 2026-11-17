# FiveHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwelve } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: FiveHundredAndTwelve = {
  ciEnabled: true,
  organizationId: "<id>",
  repository: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `ciEnabled`        | *boolean*          | :heavy_check_mark: | N/A                |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `repository`       | *string*           | :heavy_check_mark: | N/A                |