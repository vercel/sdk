# OneHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEleven } from "@vercel/sdk/models/usereventpayloaditems.js";

let value: OneHundredAndEleven = {
  documentId: "<id>",
  fingerprint: "<value>",
  slug: "<value>",
  title: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `documentId`       | *string*           | :heavy_check_mark: | N/A                |
| `fingerprint`      | *string*           | :heavy_check_mark: | N/A                |
| `slug`             | *string*           | :heavy_check_mark: | N/A                |
| `title`            | *string*           | :heavy_check_mark: | N/A                |