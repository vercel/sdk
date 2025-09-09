# Vercel Shareable Link Protection Bypass API Guide

## Overview

The Vercel API endpoint `PATCH /aliases/{aliasId}/protection-bypass` allows you to manage shareable links for deployment protection bypass. This guide explains how to properly use this API for different scenarios.

## API Endpoint

```
PATCH https://api.vercel.com/aliases/{aliasId}/protection-bypass
```

## Understanding the API Behavior

The API has three main use cases:

1. **Create a new shareable link** (when none exists)
2. **Revoke an existing shareable link**
3. **Regenerate an existing shareable link** (revoke + create new)

## Issue Analysis

Based on the code analysis from `manage-shareable-link-protection-bypass.ts`, the API behavior is:

### Creating New Shareable Links

When you send `data: {}` (empty object), the API:

1. **Checks if a shareable link already exists** using `getShareableLink(doc.protectionBypass)`
2. **If a shareable link exists**, it returns a `409 Conflict` error:
   ```json
   {
     "error": {
       "code": "protection_bypass_conflict",
       "message": "shareable link already exists."
     }
   }
   ```
3. **If no shareable link exists**, it creates a new one successfully

### The Root Problem

The issue you encountered is that **the API correctly creates new shareable links when none exist**, but you might be hitting the conflict case. Let's examine the scenarios:

## Working Examples

### 1. Create New Shareable Link (No existing link)

```bash
curl --request PATCH \
  --url https://api.vercel.com/aliases/dpl_vQxdreV1Yke89G1P3tvywr4gH3pF/protection-bypass \
  --header 'Authorization: Bearer YOUR_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{}'
```

**Expected Response (200 OK):**
```json
{
  "protectionBypass": {
    "a4bf65933e4773cb4d84a8dc800e433b": {
      "createdAt": 1519945200000,
      "createdBy": "user_id",
      "scope": "shareable-link",
      "expires": null
    }
  }
}
```

### 2. Create New Shareable Link with TTL

```bash
curl --request PATCH \
  --url https://api.vercel.com/aliases/dpl_vQxdreV1Yke89G1P3tvywr4gH3pF/protection-bypass \
  --header 'Authorization: Bearer YOUR_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{"ttl": 3600}'
```

**Note:** TTL (time-to-live) in seconds. Requires the `ShareableLinkExpiry` feature flag to be enabled.

### 3. Revoke Existing Shareable Link

```bash
curl --request PATCH \
  --url https://api.vercel.com/aliases/dpl_vQxdreV1Yke89G1P3tvywr4gH3pF/protection-bypass \
  --header 'Authorization: Bearer YOUR_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "revoke": {
      "secret": "a4bf65933e4773cb4d84a8dc800e433b",
      "regenerate": false
    }
  }'
```

### 4. Regenerate Shareable Link (Revoke + Create New)

```bash
curl --request PATCH \
  --url https://api.vercel.com/aliases/dpl_vQxdreV1Yke89G1P3tvywr4gH3pF/protection-bypass \
  --header 'Authorization: Bearer YOUR_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
    "revoke": {
      "secret": "a4bf65933e4773cb4d84a8dc800e433b",
      "regenerate": true
    }
  }'
```

## Troubleshooting Your Issue

Based on your description, here are the most likely scenarios:

### Scenario 1: Shareable Link Already Exists

If you're getting a 409 error, a shareable link already exists. First, check what exists:

```bash
# Get current protection bypass status
curl --request GET \
  --url https://api.vercel.com/aliases/dpl_vQxdreV1Yke89G1P3tvywr4gH3pF/protection-bypass \
  --header 'Authorization: Bearer YOUR_TOKEN'
```

If a shareable link exists, you need to either:
- Revoke it first, then create a new one
- Or regenerate it in one step

### Scenario 2: Permissions Issue

Ensure your token has the right permissions:
- **Regular deployments**: MEMBER, DEVELOPER, ADMIN, or OWNER role
- **Production deployments**: OWNER, MEMBER, or ADMIN role only

### Scenario 3: Invalid Deployment ID

Verify the deployment/alias ID is correct and belongs to your team.

## Request Body Schema

```typescript
interface PatchProtectionBypassRequest {
  ttl?: number;  // Optional: TTL in seconds (requires feature flag)
  revoke?: {
    secret: string;     // Required: The secret token to revoke
    regenerate: boolean; // Required: Whether to create a new link
  };
}
```

## Response Codes

- **200**: Success
- **400**: Bad request (invalid TTL, invalid revoke data)
- **403**: Forbidden (insufficient permissions)
- **404**: Not found (invalid alias ID or secret not found)
- **409**: Conflict (shareable link already exists when trying to create)

## Common Patterns

### Enable Sharing Programmatically

```bash
# 1. Check if sharing is already enabled
GET_RESPONSE=$(curl -s --request GET \
  --url https://api.vercel.com/aliases/dpl_vQxdreV1Yke89G1P3tvywr4gH3pF/protection-bypass \
  --header 'Authorization: Bearer YOUR_TOKEN')

# 2. If no shareable link exists, create one
if [[ "$GET_RESPONSE" == *'"scope":"shareable-link"'* ]]; then
  echo "Shareable link already exists"
else
  curl --request PATCH \
    --url https://api.vercel.com/aliases/dpl_vQxdreV1Yke89G1P3tvywr4gH3pF/protection-bypass \
    --header 'Authorization: Bearer YOUR_TOKEN' \
    --header 'Content-Type: application/json' \
    --data '{}'
fi
```

### Refresh/Regenerate Token

```bash
# Get current secret first
CURRENT_SECRET=$(curl -s --request GET \
  --url https://api.vercel.com/aliases/dpl_vQxdreV1Yke89G1P3tvywr4gH3pF/protection-bypass \
  --header 'Authorization: Bearer YOUR_TOKEN' | \
  jq -r '.protectionBypass | to_entries[] | select(.value.scope == "shareable-link") | .key')

# Regenerate with the current secret
curl --request PATCH \
  --url https://api.vercel.com/aliases/dpl_vQxdreV1Yke89G1P3tvywr4gH3pF/protection-bypass \
  --header 'Authorization: Bearer YOUR_TOKEN' \
  --header 'Content-Type: application/json' \
  --data "{
    \"revoke\": {
      \"secret\": \"$CURRENT_SECRET\",
      \"regenerate\": true
    }
  }"
```

## Key Insights from Code Analysis

1. **Empty `{}` data creates new links**: This is the correct approach for enabling sharing
2. **Conflict detection**: The API prevents duplicate shareable links per deployment
3. **Automatic cleanup**: Hobby plan users are limited to one shareable link and old ones are automatically removed
4. **Proper error handling**: The API provides clear error messages for different failure scenarios

The API is working as designed - your empty `{}` request should work for creating new shareable links when none exist.
