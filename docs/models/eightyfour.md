# EightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFour } from "@vercel/sdk/models/payloadresources.js";

let value: EightyFour = {
  gitlabLogin: "<value>",
  gitlabUserId: 3203.03,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `gitlabLogin`      | *string*           | :heavy_check_mark: | N/A                |
| `gitlabUserId`     | *number*           | :heavy_check_mark: | N/A                |