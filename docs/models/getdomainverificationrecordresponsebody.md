# GetDomainVerificationRecordResponseBody

Returns the TXT record needed to verify domain ownership.

## Example Usage

```typescript
import { GetDomainVerificationRecordResponseBody } from "@vercel/sdk/models/getdomainverificationrecordop.js";

let value: GetDomainVerificationRecordResponseBody = {
  txtRecord: "<value>",
  verificationDomain: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `txtRecord`          | *string*             | :heavy_check_mark:   | N/A                  |
| `verificationDomain` | *string*             | :heavy_check_mark:   | N/A                  |