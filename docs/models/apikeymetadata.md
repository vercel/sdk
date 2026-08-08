# APIKeyMetadata

Generic metadata attached to the API key.

The accepted shape depends on the key's `purpose` and is validated when the key is created. For `ai-gateway` keys this carries `environment` and `spendAttribution`.

## Example Usage

```typescript
import { APIKeyMetadata } from "@vercel/sdk/models/apikey.js";

let value: APIKeyMetadata = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |