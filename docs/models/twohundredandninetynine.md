# TwoHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyNine } from "@vercel/sdk/models/usereventpayloadkind.js";

let value: TwoHundredAndNinetyNine = {
  onCommit: false,
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `onCommit`         | *boolean*          | :heavy_check_mark: | N/A                |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |