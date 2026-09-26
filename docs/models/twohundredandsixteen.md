# TwoHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixteen } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: TwoHundredAndSixteen = {
  enabled: false,
  organizationId: "<id>",
  teamId: "<id>",
  teamSlug: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |
| `teamId`           | *string*           | :heavy_check_mark: | N/A                |
| `teamSlug`         | *string*           | :heavy_check_mark: | N/A                |