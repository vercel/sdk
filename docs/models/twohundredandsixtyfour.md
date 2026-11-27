# TwoHundredAndSixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyFour } from "@vercel/sdk/models/usereventpayloaddsyncmode.js";

let value: TwoHundredAndSixtyFour = {
  connectionType: "<value>",
  enforced: true,
  organizationId: "<id>",
  organizationSlug: "<value>",
  sourceTeamId: "<id>",
  sourceTeamName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `connectionType`   | *string*           | :heavy_check_mark: | N/A                |
| `enforced`         | *boolean*          | :heavy_check_mark: | N/A                |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `organizationSlug` | *string*           | :heavy_check_mark: | N/A                |
| `sourceTeamId`     | *string*           | :heavy_check_mark: | N/A                |
| `sourceTeamName`   | *string*           | :heavy_check_mark: | N/A                |