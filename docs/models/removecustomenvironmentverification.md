# RemoveCustomEnvironmentVerification

A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.

## Example Usage

```typescript
import { RemoveCustomEnvironmentVerification } from "@vercel/sdk/models/removecustomenvironmentop.js";

let value: RemoveCustomEnvironmentVerification = {
  domain: "palatable-draw.name",
  reason: "<value>",
  type: "<value>",
  value: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `domain`           | *string*           | :heavy_check_mark: | N/A                |
| `reason`           | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |
| `value`            | *string*           | :heavy_check_mark: | N/A                |